<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
// Auto-registers all controllers/elements/scales/plugins
import Chart from 'chart.js/auto';
import type { Chart as ChartType, Plugin } from 'chart.js';

type Props = {
  labels?: string[];
  data?: number[];
  height?: number;
  minY?: number;
  maxY?: number;
};
const props = withDefaults(defineProps<Props>(), {
  labels: () => ['Mar', 'May', 'Jul', 'Sep'],
  data: () => [100, 91, 82, 73],
  height: 180,
  minY: 70,
  maxY: 100
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
let chart: ChartType | null = null;

// Plugin to draw right-side labels
const rightLabelsPlugin: Plugin<'line'> = {
  id: 'rightLabels',
  afterDraw(c) {
    const { ctx, chartArea, scales } = c;
    const y: any = scales['y'];
    if (!y || !(c.data.datasets?.[0]?.data?.length)) return;

    const last = Number(c.data.datasets[0].data[c.data.datasets[0].data.length - 1]);

    ctx.save();
    ctx.font = '12px Inter, system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#9CA3AF';
    ctx.textAlign = 'right';

    // top label (100%)
    ctx.fillText('100%', chartArea.right, y.getPixelForValue(props.maxY) + 4);

    // last point label
    const lastY = y.getPixelForValue(last);
    ctx.fillText(`${last}%`, chartArea.right, lastY);

    ctx.restore();
  }
};

function render() {
  if (!canvasRef.value) return;

  if (chart) {
    chart.destroy();
    chart = null;
  }

  chart = new Chart(canvasRef.value, {
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          borderColor: '#22C55E',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointBackgroundColor: '#22C55E',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // respect the parent height
      layout: { padding: { right: 28 } },
      animation: { duration: 500 },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#9CA3AF', maxRotation: 0 },
          border: { display: false }
        },
        y: {
          min: props.minY,
          max: props.maxY,
          ticks: { display: false },
          grid: {
            // DON'T use drawBorder here (v4 typings complain)
            color: '#F3F4F6',
            drawOnChartArea: true,
            drawTicks: true
          },
          border: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: (ctx) => `${ctx.parsed.y}%` }
        }
      }
    },
    plugins: [rightLabelsPlugin]
  });
}

onMounted(render);
onBeforeUnmount(() => {
  if (chart) chart.destroy();
});

// Re-render on prop changes
watch(
  () => ({ labels: props.labels, data: props.data, minY: props.minY, maxY: props.maxY }),
  () => render(),
  { deep: true }
);
</script>

<template>
  <div class="w-full rounded-lg bg-white/0 p-0">
    <div :style="{ height: props.height + 'px' }" class="relative">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

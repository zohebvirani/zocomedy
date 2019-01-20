export default function round(num, decimals) {
  const factor = Math.pow(10, decimals)
  return Math.round(num * factor) / factor
}

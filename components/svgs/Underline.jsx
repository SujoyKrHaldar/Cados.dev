export default function Underline({ color }) {
  return (
    <svg fill="none" viewBox="0 0 286 112" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M121.324 48.25c-13.42.538-26.683 1.2-39.617 1.923-18.309 1.024-36.61 2.083-54.802 3.759-5.726.53-11.542.865-17.232 1.526-3.572.415-8.309 1.006-8.93 1.13-.325.07-.467.176-.513.212-.322.247-.264.485-.082.67.073.08.258.273.77.3 34.293 1.809 69.358-1.72 103.692-2.091 59.54-.635 120.885 1.888 179.952 7.393.516.045 1.017-.176 1.089-.502.086-.318-.286-.627-.802-.671-59.168-5.514-120.613-8.047-180.268-7.402-31.998.344-64.627 3.44-96.668 2.382l2.117-.256c5.667-.662 11.458-.988 17.161-1.518 18.153-1.676 36.418-2.735 54.703-3.75 22.687-1.27 46.363-2.364 70.225-2.875 8.536.079 17.044.158 25.552.255 18.405.212 36.896.83 55.258 1.66 5.528.255 11.057.52 16.585.749 1.834.08 6.56.309 7.219.291.817-.018.974-.441.988-.512.043-.158.015-.379-.386-.564-.043-.027-.301-.115-.874-.168-33.387-3.123-69.036-3.644-104.314-2.894-37.211-.326-74.565-.467-111.681-.617-.532 0-.965.264-.97.59-.003.327.426.592.957.6 26.876.107 53.887.212 80.871.38z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
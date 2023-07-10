import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./public-path"
import { createRoot } from 'react-dom/client';

const render = (props: { container?: HTMLElement }) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    props.container?.querySelector("#root") || document.getElementById("root")
  );
};

export async function bootstrap() {
  console.log("Submodule-one Bootstrap");
}

export async function mount(props: { container?: HTMLElement }) {
  render(props);
  console.log("Submodule-one mount", props);
}

export async function unmount(props: { container?: HTMLElement }) {
  const { container } = props;
  const root = container?.querySelector("#root") || document.getElementById("root");

  if (root) {
    ReactDOM.unmountComponentAtNode(root);
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

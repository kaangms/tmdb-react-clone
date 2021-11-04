import { createStore } from "redux";
import rootRedecure from "./index";

export default function configureStore() {
  return createStore(rootRedecure);
}

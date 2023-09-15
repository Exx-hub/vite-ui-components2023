import axios from "axios";
import { useEffect } from "react";

function UseEffect() {
  //   OPTION #1
  //     useEffect(() => {
  //       let mounted = true;

  //       fetch("https://jsonplaceholder.typicode.com/posts/1")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (mounted) {
  //             console.log("mounted!");
  //             console.log(data);
  //             alert("posts are fetched!");
  //           }
  //         });

  //       return () => {
  //         console.log("cleanup!");
  //         mounted = false;
  //       };
  //     }, []);

  //   OPTION #2 with fetch and AbortController
  //     useEffect(() => {
  //       const controller = new AbortController();
  //       const signal = controller.signal;

  //       fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("mounted!");
  //           console.log(data);
  //           alert("posts are fetched!");
  //         })
  //         .catch((err) => {
  //           if (err.name === "AbortError") {
  //             console.log("cancelled");
  //           }
  //         });

  //       return () => {
  //         console.log("cleanup!");
  //         controller.abort();
  //       };
  //     }, []);

  //   OPTION #3
  //     useEffect(() => {
  //       const cancelToken = axios.CancelToken.source();

  //       axios
  //         .get("https://jsonplaceholder.typicode.com/posts/1", { cancelToken: cancelToken.token })
  //         .then((res) => {
  //           console.log("mounted!");
  //           console.log(res.data);
  //           alert("posts are fetched!");
  //         })
  //         .catch((err) => {
  //           if (axios.isCancel(err)) {
  //             console.log("cancelled!");
  //           }
  //         });

  //       return () => {
  //         cancelToken.cancel();
  //       };
  //     }, []);
  return <div>UseEffect</div>;
}

export default UseEffect;

import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import React from "react";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 p-3">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNTIgNTMuMTMzMzYwMDU4NjU3MDI2IiBoZWlnaHQ9IjUzLjEzMzM2MDA1ODY1NzAyNiIgd2lkdGg9IjM5NS41MiI+PGc+PHN2ZyB2aWV3Qm94PSIwIDAgNDg3LjcxNDM5OTIxMTk5OTQgNjUuNTE4NTY5OTMxMDM0NDgiIGhlaWdodD0iNTMuMTMzMzYwMDU4NjU3MDI2IiB3aWR0aD0iMzk1LjUyIj48Zz48cmVjdCB3aWR0aD0iNS44NzkxMzY1Njg3MDEzNTIiIGhlaWdodD0iNjUuNTE4NTY5OTMxMDM0NDgiIHg9IjcwLjkyNDg1Mjc3NzU4Nzc0IiB5PSIwIiBmaWxsPSIjZmJmYmY4IiBvcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0idHJhbnNwYXJlbnQiIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9InJlY3QtcXotMCIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9InByaW1hcnkiIHJ4PSIxJSIgaWQ9InF6LTAiIGRhdGEtcGFsZXR0ZS1jb2xvcj0iI2ZiZmJmOCIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDkyLjE5NDM5OTIxMTk5OTQ0LDAuMTYyOTgxNTE3MjQxMzc3MSkiPjxzdmcgdmlld0JveD0iMCAwIDM5NS41MiA2NS4xOTI2MDY4OTY1NTE3MiIgaGVpZ2h0PSI2NS4xOTI2MDY4OTY1NTE3MiIgd2lkdGg9IjM5NS41MiI+PGcgaWQ9InRleHRibG9ja3RyYW5zZm9ybSI+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDY1LjE5MjYwNjg5NjU1MTcyIiBoZWlnaHQ9IjY1LjE5MjYwNjg5NjU1MTcyIiB3aWR0aD0iMzk1LjUyIiBpZD0idGV4dGJsb2NrIj48Zz48c3ZnIHZpZXdCb3g9IjAgMCAzOTUuNTIgNjUuMTkyNjA2ODk2NTUxNzIiIGhlaWdodD0iNjUuMTkyNjA2ODk2NTUxNzIiIHdpZHRoPSIzOTUuNTIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PHN2ZyB3aWR0aD0iMzk1LjUyIiB2aWV3Qm94PSIyIC0zNS4zNSAyMTcuNDggMzUuODUiIGhlaWdodD0iNjUuMTkyNjA2ODk2NTUxNzIiIGRhdGEtcGFsZXR0ZS1jb2xvcj0iI2ZiZmJmOCI+PHBhdGggZD0iTTcuODUgMEwyLjI1IDBRMiAwIDItMC4yNUwyLTAuMjUgMi4xLTM0LjZRMi4xLTM0LjggMi4zLTM0LjhMMi4zLTM0LjggMTEuOS0zNC44UTE2LjUtMzQuOCAxOS4xOC0zMiAyMS44NS0yOS4yIDIxLjg1LTI0LjRMMjEuODUtMjQuNFEyMS44NS0yMC44NSAyMC40NS0xOC4yNSAxOS4wNS0xNS42NSAxNi44LTE0LjI1IDE0LjU1LTEyLjg1IDExLjktMTIuODVMMTEuOS0xMi44NSA4LjEtMTIuODUgOC4xLTAuMjVROC4xIDAgNy44NSAwTDcuODUgMFpNOC4xLTI4LjhMOC4xLTE4LjkgMTEuOS0xOC45UTEzLjUtMTguOSAxNC42OC0yMC40MyAxNS44NS0yMS45NSAxNS44NS0yNC40TDE1Ljg1LTI0LjRRMTUuODUtMjYuMzUgMTQuOC0yNy42IDEzLjc1LTI4Ljg1IDExLjktMjguODVMMTEuOS0yOC44NSA4LjEtMjguOFpNMjAuNjUtMC4yNUwyMC42NS0wLjI1IDI2Ljg1LTM0LjZRMjYuOS0zNC44IDI3LjEtMzQuOEwyNy4xLTM0LjggMzQuMzUtMzQuOFEzNC41NS0zNC44IDM0LjYtMzQuNkwzNC42LTM0LjYgNDAuNTUtMC4yNVE0MC42IDAgNDAuMzUgMEw0MC4zNSAwIDM0LjggMFEzNC42IDAgMzQuNTUtMC4yNUwzNC41NS0wLjI1IDM0LTMuOSAyNy4yLTMuOSAyNi42NS0wLjI1UTI2LjYgMCAyNi40IDBMMjYuNCAwIDIwLjg1IDBRMjAuNjUgMCAyMC42NS0wLjI1Wk0zMC40NS0yMy4zTDI4LjItOS4yNSAzMy05LjI1IDMwLjk1LTIzLjMgMzAuNjUtMjUuMTUgMzAuNDUtMjMuM1pNNDkuNTUgMEw0My45IDBRNDMuNyAwIDQzLjctMC4yNUw0My43LTAuMjUgNDMuOC0zNC42UTQzLjgtMzQuOCA0NC0zNC44TDQ0LTM0LjggNTQuMS0zNC44UTU2LjgtMzQuOCA1OS4wNy0zMy40OCA2MS4zNS0zMi4xNSA2Mi43LTI5LjkzIDY0LjA1LTI3LjcgNjQuMDUtMjQuOUw2NC4wNS0yNC45UTY0LjA1LTIzLjA1IDYzLjUtMjEuNTggNjIuOTUtMjAuMSA2Mi4yLTE5LjA3IDYxLjQ1LTE4LjA1IDYwLjg1LTE3LjU1TDYwLjg1LTE3LjU1UTYzLjU1LTE0LjU1IDYzLjU1LTEwLjVMNjMuNTUtMTAuNSA2My42LTAuMjVRNjMuNiAwIDYzLjM1IDBMNjMuMzUgMCA1Ny43IDBRNTcuNSAwIDU3LjUtMC4xNUw1Ny41LTAuMTUgNTcuNS0xMC41UTU3LjUtMTIuMyA1Ni4yMi0xMy42MyA1NC45NS0xNC45NSA1My4xLTE0Ljk1TDUzLjEtMTQuOTUgNDkuOC0xNC45NSA0OS43NS0wLjI1UTQ5Ljc1IDAgNDkuNTUgMEw0OS41NSAwWk00OS44LTI4LjhMNDkuOC0yMC45NSA1NC4xLTIwLjk1UTU1LjY1LTIwLjk1IDU2Ljg1LTIyLjEgNTguMDUtMjMuMjUgNTguMDUtMjQuOUw1OC4wNS0yNC45UTU4LjA1LTI2LjUgNTYuODctMjcuNjUgNTUuNy0yOC44IDU0LjEtMjguOEw1NC4xLTI4LjggNDkuOC0yOC44Wk03Ni43NCAwLjVMNzYuNzQgMC41UTczLjk5IDAuNSA3MS43Ny0wLjg4IDY5LjU0LTIuMjUgNjguMjQtNC41NSA2Ni45NC02Ljg1IDY2Ljk0LTkuN0w2Ni45NC05LjcgNjYuOTktMjUuM1E2Ni45OS0yOC4wNSA2OC4yNy0zMC4zMyA2OS41NC0zMi42IDcxLjc3LTMzLjk4IDczLjk5LTM1LjM1IDc2Ljc0LTM1LjM1TDc2Ljc0LTM1LjM1UTc5LjQ5LTM1LjM1IDgxLjY5LTM0IDgzLjg5LTMyLjY1IDg1LjE5LTMwLjM4IDg2LjQ5LTI4LjEgODYuNDktMjUuM0w4Ni40OS0yNS4zIDg2LjQ5LTIzUTg2LjQ5LTIyLjggODYuMjktMjIuOEw4Ni4yOS0yMi44IDgwLjY5LTIyLjhRODAuNDktMjIuOCA4MC40OS0yM0w4MC40OS0yMyA4MC40OS0yNS4zUTgwLjQ5LTI2Ljk1IDc5LjQyLTI4LjE1IDc4LjM0LTI5LjM1IDc2Ljc0LTI5LjM1TDc2Ljc0LTI5LjM1UTc0Ljk0LTI5LjM1IDczLjk5LTI4LjEzIDczLjA0LTI2LjkgNzMuMDQtMjUuM0w3My4wNC0yNS4zIDczLjA0LTkuN1E3My4wNC03Ljg1IDc0LjEyLTYuNyA3NS4xOS01LjU1IDc2Ljc0LTUuNTVMNzYuNzQtNS41NVE3OC4zNC01LjU1IDc5LjQyLTYuODMgODAuNDktOC4xIDgwLjQ5LTkuN0w4MC40OS05LjcgODAuNDktMTJRODAuNDktMTIuMiA4MC42OS0xMi4yTDgwLjY5LTEyLjIgODYuMzQtMTIuMlE4Ni41NC0xMi4yIDg2LjU0LTEyTDg2LjU0LTEyIDg2LjU0LTkuN1E4Ni41NC02Ljg1IDg1LjIyLTQuNTUgODMuODktMi4yNSA4MS42OS0wLjg4IDc5LjQ5IDAuNSA3Ni43NCAwLjVaTTEwNi41NCAwTDkwLjM5IDBROTAuMTkgMCA5MC4xOS0wLjI1TDkwLjE5LTAuMjUgOTAuMjQtMzQuNlE5MC4yNC0zNC44IDkwLjQ0LTM0LjhMOTAuNDQtMzQuOCAxMDYuNDktMzQuOFExMDYuNjktMzQuOCAxMDYuNjktMzQuNTVMMTA2LjY5LTM0LjU1IDEwNi42OS0yOC45NVExMDYuNjktMjguNzUgMTA2LjQ5LTI4Ljc1TDEwNi40OS0yOC43NSA5Ni4yNC0yOC43NSA5Ni4yNC0yMC45NSAxMDYuNDktMjAuOTVRMTA2LjY5LTIwLjk1IDEwNi42OS0yMC43NUwxMDYuNjktMjAuNzUgMTA2Ljc0LTE1LjFRMTA2Ljc0LTE0LjkgMTA2LjU0LTE0LjlMMTA2LjU0LTE0LjkgOTYuMjQtMTQuOSA5Ni4yNC02LjE1IDEwNi41NC02LjE1UTEwNi43NC02LjE1IDEwNi43NC01LjlMMTA2Ljc0LTUuOSAxMDYuNzQtMC4yUTEwNi43NCAwIDEwNi41NCAwTDEwNi41NCAwWk0xMjcuNTQgMEwxMTEuMzkgMFExMTEuMTkgMCAxMTEuMTktMC4yNUwxMTEuMTktMC4yNSAxMTEuMjQtMzQuNTVRMTExLjI0LTM0LjggMTExLjQ5LTM0LjhMMTExLjQ5LTM0LjggMTE3LjA0LTM0LjhRMTE3LjI5LTM0LjggMTE3LjI5LTM0LjU1TDExNy4yOS0zNC41NSAxMTcuMjQtNi4xNSAxMjcuNTQtNi4xNVExMjcuNzktNi4xNSAxMjcuNzktNS45TDEyNy43OS01LjkgMTI3Ljc5LTAuMjVRMTI3Ljc5IDAgMTI3LjU0IDBMMTI3LjU0IDBaTTE0NC45MyAwLjVMMTQ0LjkzIDAuNVExNDIuMjMgMC41IDE0MC4wMS0wLjg4IDEzNy43OC0yLjI1IDEzNi40Ni00LjUzIDEzNS4xMy02LjggMTM1LjEzLTkuNTVMMTM1LjEzLTkuNTUgMTM1LjEzLTExLjg1UTEzNS4xMy0xMi4xIDEzNS4zOC0xMi4xTDEzNS4zOC0xMi4xIDE0MC45OC0xMi4xUTE0MS4xOC0xMi4xIDE0MS4xOC0xMS44NUwxNDEuMTgtMTEuODUgMTQxLjE4LTkuNTVRMTQxLjE4LTcuOSAxNDIuMjgtNi43MyAxNDMuMzgtNS41NSAxNDQuOTMtNS41NUwxNDQuOTMtNS41NVExNDYuNDgtNS41NSAxNDcuNTgtNi43NSAxNDguNjgtNy45NSAxNDguNjgtOS41NUwxNDguNjgtOS41NVExNDguNjgtMTEuNCAxNDYuMjgtMTIuNzVMMTQ2LjI4LTEyLjc1UTE0NS40OC0xMy4yIDE0My43OC0xNC4xNSAxNDIuMDgtMTUuMSAxNDAuNTgtMTUuOTVMMTQwLjU4LTE1Ljk1UTEzNy44My0xNy41NSAxMzYuNTEtMTkuOTggMTM1LjE4LTIyLjQgMTM1LjE4LTI1LjQ1TDEzNS4xOC0yNS40NVExMzUuMTgtMjguMjUgMTM2LjUzLTMwLjQ4IDEzNy44OC0zMi43IDE0MC4xMS0zNCAxNDIuMzMtMzUuMyAxNDQuOTMtMzUuM0wxNDQuOTMtMzUuM1ExNDcuNTgtMzUuMyAxNDkuODEtMzMuOTggMTUyLjAzLTMyLjY1IDE1My4zNi0zMC40MyAxNTQuNjgtMjguMiAxNTQuNjgtMjUuNDVMMTU0LjY4LTI1LjQ1IDE1NC42OC0yMS4zNVExNTQuNjgtMjEuMTUgMTU0LjQ4LTIxLjE1TDE1NC40OC0yMS4xNSAxNDguODgtMjEuMTVRMTQ4LjY4LTIxLjE1IDE0OC42OC0yMS4zNUwxNDguNjgtMjEuMzUgMTQ4LjYzLTI1LjQ1UTE0OC42My0yNy4yIDE0Ny41My0yOC4zIDE0Ni40My0yOS40IDE0NC45My0yOS40TDE0NC45My0yOS40UTE0My4zOC0yOS40IDE0Mi4yOC0yOC4yMyAxNDEuMTgtMjcuMDUgMTQxLjE4LTI1LjQ1TDE0MS4xOC0yNS40NVExNDEuMTgtMjMuOCAxNDEuODgtMjIuNyAxNDIuNTgtMjEuNiAxNDQuNDMtMjAuNkwxNDQuNDMtMjAuNlExNDQuNjgtMjAuNDUgMTQ1LjQxLTIwLjA4IDE0Ni4xMy0xOS43IDE0Ni45OC0xOS4yMyAxNDcuODMtMTguNzUgMTQ4LjUxLTE4LjQgMTQ5LjE4LTE4LjA1IDE0OS4zMy0xNy45NUwxNDkuMzMtMTcuOTVRMTUxLjgzLTE2LjU1IDE1My4yOC0xNC41MyAxNTQuNzMtMTIuNSAxNTQuNzMtOS41NUwxNTQuNzMtOS41NVExNTQuNzMtNi43IDE1My40MS00LjQyIDE1Mi4wOC0yLjE1IDE0OS44Ni0wLjgzIDE0Ny42MyAwLjUgMTQ0LjkzIDAuNVpNMTY3LjYzIDBMMTYxLjg4IDBRMTYxLjczIDAgMTYxLjczLTAuMkwxNjEuNzMtMC4yIDE2MS43OC0xNC40IDE1NS4wOC0zNC42UTE1NS4wMy0zNC44IDE1NS4yMy0zNC44TDE1NS4yMy0zNC44IDE2MC43OC0zNC44UTE2MS4wMy0zNC44IDE2MS4wOC0zNC42TDE2MS4wOC0zNC42IDE2NC43OC0yMS4xNSAxNjguNTMtMzQuNlExNjguNTgtMzQuOCAxNjguNzgtMzQuOEwxNjguNzgtMzQuOCAxNzQuMzgtMzQuOFExNzQuNTgtMzQuOCAxNzQuNTMtMzQuNkwxNzQuNTMtMzQuNiAxNjcuNzgtMTQuNiAxNjcuODMtMC4yUTE2Ny44MyAwIDE2Ny42MyAwTDE2Ny42MyAwWk0xODIuNzMgMEwxNzcuNzMgMFExNzcuMzMgMCAxNzcuMzMtMC4zNUwxNzcuMzMtMC4zNSAxNzcuMjgtMzQuNFExNzcuMjgtMzQuOCAxNzcuNjgtMzQuOEwxNzcuNjgtMzQuOCAxODIuMTgtMzQuOCAxOTAuNjMtMTUuMSAxOTAuMzgtMzQuNFExOTAuMzgtMzQuOCAxOTAuODMtMzQuOEwxOTAuODMtMzQuOCAxOTUuNzgtMzQuOFExOTYuMDgtMzQuOCAxOTYuMDgtMzQuNEwxOTYuMDgtMzQuNCAxOTYuMTMtMC4zUTE5Ni4xMyAwIDE5NS44OCAwTDE5NS44OCAwIDE5MS40OCAwIDE4Mi44My0xOC40IDE4My4xOC0wLjRRMTgzLjE4IDAgMTgyLjczIDBMMTgyLjczIDBaTTIwOS42OCAwLjVMMjA5LjY4IDAuNVEyMDYuOTMgMC41IDIwNC43LTAuODggMjAyLjQ4LTIuMjUgMjAxLjE4LTQuNTUgMTk5Ljg4LTYuODUgMTk5Ljg4LTkuN0wxOTkuODgtOS43IDE5OS45My0yNS4zUTE5OS45My0yOC4wNSAyMDEuMi0zMC4zMyAyMDIuNDgtMzIuNiAyMDQuNy0zMy45OCAyMDYuOTMtMzUuMzUgMjA5LjY4LTM1LjM1TDIwOS42OC0zNS4zNVEyMTIuNDMtMzUuMzUgMjE0LjYzLTM0IDIxNi44My0zMi42NSAyMTguMTMtMzAuMzggMjE5LjQzLTI4LjEgMjE5LjQzLTI1LjNMMjE5LjQzLTI1LjMgMjE5LjQzLTIzUTIxOS40My0yMi44IDIxOS4yMy0yMi44TDIxOS4yMy0yMi44IDIxMy42My0yMi44UTIxMy40My0yMi44IDIxMy40My0yM0wyMTMuNDMtMjMgMjEzLjQzLTI1LjNRMjEzLjQzLTI2Ljk1IDIxMi4zNS0yOC4xNSAyMTEuMjgtMjkuMzUgMjA5LjY4LTI5LjM1TDIwOS42OC0yOS4zNVEyMDcuODgtMjkuMzUgMjA2LjkzLTI4LjEzIDIwNS45OC0yNi45IDIwNS45OC0yNS4zTDIwNS45OC0yNS4zIDIwNS45OC05LjdRMjA1Ljk4LTcuODUgMjA3LjA1LTYuNyAyMDguMTMtNS41NSAyMDkuNjgtNS41NUwyMDkuNjgtNS41NVEyMTEuMjgtNS41NSAyMTIuMzUtNi44MyAyMTMuNDMtOC4xIDIxMy40My05LjdMMjEzLjQzLTkuNyAyMTMuNDMtMTJRMjEzLjQzLTEyLjIgMjEzLjYzLTEyLjJMMjEzLjYzLTEyLjIgMjE5LjI4LTEyLjJRMjE5LjQ4LTEyLjIgMjE5LjQ4LTEyTDIxOS40OC0xMiAyMTkuNDgtOS43UTIxOS40OC02Ljg1IDIxOC4xNS00LjU1IDIxNi44My0yLjI1IDIxNC42My0wLjg4IDIxMi40MyAwLjUgMjA5LjY4IDAuNVoiIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSIgZmlsbD0iI2ZiZmJmOCIgY2xhc3M9IndvcmRtYXJrLXRleHQtMCIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9InByaW1hcnkiIGlkPSJ0ZXh0LTAiLz48L3N2Zz48L2c+PC9zdmc+PC9nPjwvc3ZnPjwvZz48L3N2Zz48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDAuMTYyOTgxNTE3MjQxMzc3MSkiPjxzdmcgdmlld0JveD0iMCAwIDU1LjUzNDQ0MjkxMTg3NzQgNjUuMTkyNjA2ODk2NTUxNzIiIGhlaWdodD0iNjUuMTkyNjA2ODk2NTUxNzIiIHdpZHRoPSI1NS41MzQ0NDI5MTE4Nzc0Ij48Zz48c3ZnIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjkgNSA0NiA1NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iNjUuMTkyNjA2ODk2NTUxNzIiIHdpZHRoPSI1NS41MzQ0NDI5MTE4Nzc0IiBjbGFzcz0iaWNvbi1pY29uLTAiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJhY2NlbnQiIGlkPSJpY29uLTAiPjxnIGZpbGw9IiNmZmZmMDAiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJhY2NlbnQiPjxnIGZpbGw9IiNmZmZmMDAiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJhY2NlbnQiPjxwYXRoIGQ9Ik01NCAxNWMtOC43NDggMC0xMy0yLjk0NC0xMy05IDAtMC41NTItMC40NDctMS0xLTFIMjRjLTAuNTUyIDAtMSAwLjQ0OC0xIDEgMCA2LjA1Ni00LjI1MiA5LTEzIDktMC41NTIgMC0xIDAuNDQ4LTEgMXYxOGMwIDEwLjM3IDIxLjU0NCAyNC4yNTcgMjIuNDYxIDI0Ljg0M0MzMS42MjUgNTguOTQ3IDMxLjgxMyA1OSAzMiA1OXMwLjM3NS0wLjA1MyAwLjUzOS0wLjE1N0MzMy40NTYgNTguMjU3IDU1IDQ0LjM3IDU1IDM0VjE2QzU1IDE1LjQ0OCA1NC41NTMgMTUgNTQgMTV6TTUzIDM0YzAgOC40NDctMTcuNjY0IDIwLjU4Ny0yMSAyMi44MDRDMjguNjY0IDU0LjU4NyAxMSA0Mi40NDcgMTEgMzRWMTYuOTg3QzE5Ljg0MiAxNi43NTUgMjQuNTM0IDEzLjQgMjQuOTY3IDdoMTQuMDY2YzAuNDM0IDYuNCA1LjEyNSA5Ljc1NSAxMy45NjcgOS45ODdWMzR6IiBmaWxsPSIjZmZmZjAwIiBkYXRhLWZpbGwtcGFsZXR0ZS1jb2xvcj0iYWNjZW50Ii8+PHBhdGggZD0iTTQwLjkyNSAyNS42NDJjLTAuMDM0LTAuMDktMC4wODEtMC4xNzMtMC4xNDEtMC4yNS0wLjAxNS0wLjAxOS0wLjAyNS0wLjAzOC0wLjA0MS0wLjA1Ni0wLjA2My0wLjA3MS0wLjEzNS0wLjEzNi0wLjIxOC0wLjE4Ny0wLjAxNy0wLjAxLTAuMDM1LTAuMDE0LTAuMDUyLTAuMDIzLTAuMDEtMC4wMDUtMC4wMTYtMC4wMTUtMC4wMjYtMC4wMjFsLTgtNGMtMC4wMjEtMC4wMS0wLjA0My0wLjAwOS0wLjA2NC0wLjAxOC0wLjA2Ni0wLjAyNy0wLjEzMi0wLjA0Mi0wLjIwMy0wLjA1NS0wLjA2MS0wLjAxMi0wLjExOS0wLjAyNC0wLjE4LTAuMDI0LTAuMDYxIDAtMC4xMTkgMC4wMTItMC4xOCAwLjAyNC0wLjA3IDAuMDEzLTAuMTM2IDAuMDI3LTAuMjAyIDAuMDU1LTAuMDIxIDAuMDA5LTAuMDQ0IDAuMDA3LTAuMDY1IDAuMDE4bC04IDRjLTAuMDEgMC4wMDUtMC4wMTYgMC4wMTUtMC4wMjUgMC4wMi0wLjAxOCAwLjAwOS0wLjAzNyAwLjAxNC0wLjA1MyAwLjAyNC0wLjA4MyAwLjA1MS0wLjE1NCAwLjExNi0wLjIxOCAwLjE4OC0wLjAxNSAwLjAxNy0wLjAyNiAwLjAzNi0wLjA0IDAuMDU1LTAuMDYgMC4wNzctMC4xMDYgMC4xNi0wLjE0MiAwLjI1LTAuMDA5IDAuMDIyLTAuMDIgMC4wNDMtMC4wMjcgMC4wNjZDMjMuMDE5IDI1LjgwMiAyMyAyNS44OTkgMjMgMjZ2MTJjMCAwLjM3OSAwLjIxNCAwLjcyNSAwLjU1MyAwLjg5NWw4IDRjMC4wMDkgMC4wMDQgMC4wMTkgMC4wMDMgMC4wMjggMC4wMDdDMzEuNzA5IDQyLjk2MSAzMS44NDkgNDMgMzIgNDNzMC4yOTEtMC4wMzkgMC40MTktMC4wOTljMC4wMDktMC4wMDQgMC4wMTktMC4wMDMgMC4wMjgtMC4wMDdsOC00QzQwLjc4NiAzOC43MjUgNDEgMzguMzc5IDQxIDM4VjI2YzAtMC4xMDEtMC4wMi0wLjE5OC0wLjA0OC0wLjI5MkM0MC45NDUgMjUuNjg1IDQwLjkzNCAyNS42NjUgNDAuOTI1IDI1LjY0MnpNMzIgMjguODgyTDMwLjIzNiAyOCAzNiAyNS4xMTggMzcuNzY0IDI2IDMyIDI4Ljg4MnpNMzIgMjMuMTE4TDMzLjc2NCAyNCAyOCAyNi44ODIgMjYuMjM2IDI2IDMyIDIzLjExOHpNMjUgMjcuNjE4bDIgMVYzMGMwIDAuNTUyIDAuNDQ4IDEgMSAxczEtMC40NDggMS0xdi0wLjM4MmwyIDF2OS43NjRsLTItMVYzOGMwLTAuNTUzLTAuNDQ4LTEtMS0xcy0xIDAuNDQ3LTEgMXYwLjM4MmwtMi0xVjI3LjYxOHpNMzkgMzcuMzgybC02IDN2LTkuNzY0bDYtM1YzNy4zODJ6IiBmaWxsPSIjZmZmZjAwIiBkYXRhLWZpbGwtcGFsZXR0ZS1jb2xvcj0iYWNjZW50Ii8+PC9nPjwvZz48L3N2Zz48Zy8+PC9nPjwvc3ZnPjwvZz48L3N2Zz48L2c+PGRlZnMvPjwvc3ZnPg==" width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

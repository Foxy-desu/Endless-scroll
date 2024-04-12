import { setStateFnType } from "../../../shared/types";

export const setPosToLocalStorage = (startIndex: number): void => {
    localStorage.setItem('position', JSON.stringify({startIndex: startIndex, scrollPosition: window.scrollY}));
};

export const clearPosFromLocalStorage = () => {
    localStorage.removeItem('position');
};

export const getPosFromLocalStorage = (setStartIndex: setStateFnType): boolean =>  {
    const pos = localStorage.getItem('position') as string;

    if (pos) {
      const {startIndex, scrollPosition} = JSON.parse(pos) as {startIndex: number, scrollPosition: number};
      setStartIndex(startIndex);
      window.scrollY = scrollPosition;
      clearPosFromLocalStorage();
      //to prohibit setting other values as startIndex
      return false
    }
    return true;
};
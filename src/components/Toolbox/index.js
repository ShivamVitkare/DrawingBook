import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import cx from "classnames";
import { COLORS, MENU_ITEMS } from "@/constant";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";



const Toolbox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolBox = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolBox = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
   
  const dispatch = useDispatch();
  const { color,size } = useSelector((state) => state.toolbox[activeMenuItem]);

  
  function updateBrushSize(e) {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  }

  function updateColor(newColor) {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  }
  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolBox && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
          </div>
        </div>
      )}
      {showBrushToolBox && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size </h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={size}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;

import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import styles from "./Carousel.module.scss"

const images = [
  {
    id: "1",
    imgPath:
      "images/carousel/Carousel.png",
  },
  {
    id: "2",
    imgPath:
      "images/carousel/Carousel (1).png",
  },
  {
    id: "3",
    imgPath:
      "images/carousel/Carousel (2).png",
  },
  {
    id: "4",
    imgPath:
      "images/carousel/Carousel (3).png",
  },
  {
    id: "5",
    imgPath:
      "images/carousel/Carousel (4).png",
  }
]
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function Carousel() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < images.length - 1 ? prevActiveStep + 1 : 0
    )
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep > 0 ? prevActiveStep - 1 : images.length - 1
    )
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={styles.container}>
      <Box sx={{ maxWidth: 1280, flexGrow: 1, position: "relative" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 395,
                    display: "block",
                    maxWidth: 1280,
                    objectFit: "cover",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <button onClick={handleBack} className={styles.prevBtn}>
          <img src="images/prevIcon.png" alt="btnPrev" />
        </button>
        <button onClick={handleNext} className={styles.nextBtn}>
          <img src="images/nextIcon.png" alt="btnNext" />
        </button>
      </Box>
    </div>
  )
}

export default Carousel

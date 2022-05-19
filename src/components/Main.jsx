import React, { useCallback, useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import GetTheme from "./UI/components/Theme";
import MainPage from "./UI/MainPage";

const StyledButton = styled.button`
  height: 100%;
  width: 100%;

  font-weight: bold;
  border: 3px solid ${props => (props.active ? "#FFF" : "grey")};
  color: ${props => (props.active ? "#FFF" : "#b0b0b0")};
  background-color: ${props => (props.active ? "#363636" : "#4a4a4a")};

  :hover {
    background-color: ${props => (props.active ? "#292828" : "#4a4a4a")};
  }
`;

const StyledButtonArea = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledMainContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
`;

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledDownloadButton = styled.a`
  height: 100%;
  width: 100%;

  font-weight: bold;
  border: 3px solid grey;
  color: ${props => (props.active ? "#FFF" : "#b0b0b0")};
  background-color: ${props => (props.active ? "#363636" : "#4a4a4a")};
`;

const StyledDropzone = styled(Dropzone)`
  height: 100%;
  width: 100%;

  border-top: outset;
  border-bottom: outset;
  border-color: grey;
  border-width: 4px;
  border-top: 0px;
`;

const StyledDropzoneArea = styled.div`
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledElement = styled.div`
  border-style: outset;
  border-color: grey;
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.2);

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledGradient = styled.div.attrs(({ angle, backGroundColorValue }) => ({
  style: {
    background:
      "linear-gradient(" +
      (angle || "290") +
      "deg, hsl(" +
      backGroundColorValue +
      ", 60%, 55%), hsl(" +
      (backGroundColorValue - 305) +
      ", 64%, 50%))"
  }
}))`
`;

const StyledGrid = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: ${props => props.template.layoutCol};
  grid-template-rows: ${props => props.template.layoutRow};
`;

const StyledGridChild = styled.div`
  height: 100%;
  width: 100%;

  grid-column-start: ${props => props.grid.column[0]};
  grid-column-end: ${props => props.grid.column[1]};
  grid-row-start: ${props => props.grid.row[0]};
  grid-row-end: ${props => props.grid.row[1]};
`;

const StyledHalfRight = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;
`;

const StyledBasicContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledFileList = styled.div`
  height: 100%;
  width: 100%;

  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledFileListItem = styled.div`
  height: 6%;
  width: 100%;
  border-style: outset;
  border-color: grey;
  border-width: 1px;
  background-color: rgba(0, 0, 0, 0.2);

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledNavigation = styled.div`
  border-right: outset;
  border-color: grey;
  border-width: 4px;

  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTextStrong = styled.strong`
  heigth: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #fff;
  font-size: ${props => props.fontSize || "2vh"};
  margin: ${props => props.marginValue || "4%"};

  ${props => props.center && `
    position: absolute;
    top: 50%;
    left: 2%;
    
    transform: translate(2%, -50%);
    width: 116%;
  `
  }
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Main = () => {
  const [backGroundColorValue, setBackGroundColorValue] = useState(200);
  const [backGroundColorDirection, setBackGroundColorDirection] = useState("UP");
  const [lightMode, setLightMode] = useState(false);

  const theme = GetTheme({ backGroundColorValue, lightMode });

  useInterval(() => {
    setBackgroundColor();  
  }, 500);

  const handleChangeTheme = useCallback(() => {
    setLightMode(!lightMode);
  }, [lightMode]);

  const setBackgroundColor = () => {
    let colorValue = backGroundColorValue;
    let numberDirection = backGroundColorDirection;

    if ( colorValue === 0) numberDirection = "UP";
    if ( colorValue === 360) numberDirection = "DOWN";

    const value = numberDirection === "UP" ? colorValue + 1 : colorValue - 1;

    setBackGroundColorValue(value);
    setBackGroundColorDirection(numberDirection);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MainPage
        lightMode={lightMode}
        handleChangeTheme={handleChangeTheme}
      />
    </ThemeProvider>
  );
};

export default Main;

{/*
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColorValue: { value: 200, direction: "UP" },
      lightMode: false
    };
  
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setBackgroundColor(), 500);
  }

  componentWillUnmount(){
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
  handleChangeTheme() {
    const { lightMode } = this.state;

    this.setState({ lightMode: !lightMode });
  }

  setBackgroundColor() {
    const { backGroundColorValue } = this.state;

    let colorValue = backGroundColorValue.value;
    let numberDirection = backGroundColorValue.direction;

    if ( colorValue === 0) numberDirection = "UP";
    if ( colorValue === 360) numberDirection = "DOWN";

    this.setState({
      backGroundColorValue: {
        value: numberDirection === "UP"
          ? colorValue + 1
          : colorValue - 1,
        direction: numberDirection
      }
    })
  }

  renderHeader(elements) {
    const { activeTab } = this.state;

    return (
      <>
        {elements.map((element, index) => (
          <div  key={index} style={{ float: "left" }}>
            <StyledElement>
              <StyledTextStrong>{element.name}</StyledTextStrong>
            </StyledElement>
          </div>
        ))}
      </>
    );
  }

  renderFileList() {
    const { files } = this.state;
      
    return (
      <StyledFileList>
      <div style={{ height: "100%", width: "97%" }}>
        {files.map((file, index) => (
          <StyledFileListItem key={index}>
            <StyledGrid template={{
              layoutRow: "[row1] 20% [row2] 80% [row3]",
              layoutCol: "[line1] 12% [line2] 73% [line3] 15% [line4]"
            }}>
              <StyledGridChild
                grid={{
                  column: ["line1", "line2"],
                  row: ["row1", "row3"]
                }}
                name="checkbox"
                style={{ position: "relative", borderRight: "2px outset grey" }}
              >
                <StyledCheckbox type="checkbox" />
              </StyledGridChild>
              <StyledGridChild
                grid={{
                  column: ["line2", "line3"],
                  row: ["row2", "row3"]
                }}
                name="Filename"
                style={{ position: "relative"}}
              >
                <StyledTextStrong center marginValue={"0%"}>{file.fileName}</StyledTextStrong>
              </StyledGridChild>
              <StyledGridChild
                grid={{
                  column: ["line3", "line4"],
                  row: ["row1", "row2"]
                }}
                name="FileType"
                style={{ position: "relative"}}
              >
                <StyledTextStrong center fontSize="1vh" marginValue={"1%"}>{file.type}</StyledTextStrong>
              </StyledGridChild>
            </StyledGrid>
          </StyledFileListItem>
        ))}
        <StyledFileListItem>
          <StyledDropzone onDrop={acceptedFiles => this.loadFile(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
              <StyledDropzoneArea className="container" {...getRootProps()}>
                <input {...getInputProps()} />
                <StyledTextStrong fontSize={"1.5vh"} marginValue={"0%"}>+ Add More Files</StyledTextStrong>
              </StyledDropzoneArea>
            )}
          </StyledDropzone>
        </StyledFileListItem>
        </div>
      </StyledFileList>
    );
  }

  render() {
    const {
      backGroundColorValue,
      lightMode
    } = this.state;

    const theme = GetTheme({ backGroundColorValue, lightMode });

    return (
      <>
        <StyledMainContainer>
          <StyledNavigation>
            <StyledGradient backGroundColorValue={backGroundColorValue.value}>
              <StyledGrid template={{
                layoutRow: "[row1] 5% [row2] 3% [row3] 5% [row4] 72% [row5] 15% [row6]",
                layoutCol: "[line1] 22% [line2] 78% [line3]"
              }}>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line2"],
                    row: ["row1", "row3"]
                  }}
                >
                  <StyledBasicContainer>
                    <img
                      src="heimerdinger_passive.png"
                      alt="heimerdinger_passive"
                      width="100%"
                      height="100%"
                      style={{ border: "4px outset grey"}}
                    />
                  </StyledBasicContainer>                
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line2", "line3"],
                    row: ["row1", "row3"]
                  }}
                  style={{
                    border: "4px outset grey",
                    backgroundColor: "rgba(0, 0, 0, 0.2)"
                  }}
                />
                <StyledGridChild
                  grid={{
                    column: ["line2", "line3"],
                    row: ["row1", "row2"]
                  }}
                >
                  <StyledTextStrong fontSize={"3vh"}>
                    <u>Troygrade</u>
                  </StyledTextStrong>
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line2", "line3"],
                    row: ["row2", "row3"]
                  }}
                >
                  <StyledTextStrong fontSize={"1.5vh"}>
                    A WIP Troybin Tool Collection
                  </StyledTextStrong>
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line3"],
                    row: ["row3", "row4"]
                  }}
                  style={{ backgroundColor: "grey", border: "4px outset grey"}}
                >
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line3"],
                    row: ["row4", "row5"]
                  }}
                >
                  {files.length > 0 ? (
                    this.renderFileList()
                  ) : (
                    <StyledDropzone onDrop={acceptedFiles => this.loadFile(acceptedFiles)}>
                      {({getRootProps, getInputProps}) => (
                        <StyledDropzoneArea className="container" {...getRootProps()}>
                          <input {...getInputProps()} />
                          <StyledTextStrong fontSize={"1.5vh"} marginValue={"0%"}>Add Files By Clicking Or Drag &amp; Drop</StyledTextStrong>
                        </StyledDropzoneArea>
                      )}
                    </StyledDropzone>
                  )}
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line3"],
                    row: ["row5", "row6"]
                  }}
                >
                  <StyledGrid style={{ flex: "3"}} template={{
                    layoutRow: "[row1] 20% [row2] 40% [row3] 40% [row4]",
                    layoutCol: "[line1] auto [line2]"
                  }}>
                    <StyledGridChild
                      grid={{
                        column: ["line1", "line2"],
                        row: ["row1", "row2"]
                      }}
                      style={{ backgroundColor: "grey"}}
                    />
                    <StyledGridChild
                      grid={{
                        column: ["line1", "line2"],
                        row: ["row2", "row3"]
                      }}
                      style={{ backgroundColor: "black"}}
                    >
                      <StyledButton
                        active={files.length > 0 && !clicked}
                        disabled={files.length === 0 || clicked}
                        onClick={e => this.click(e)}
                        type="button"
                      >
                        Convert
                      </StyledButton>
                    </StyledGridChild>
                    <StyledGridChild
                      grid={{
                        column: ["line1", "line2"],
                        row: ["row3", "row4"]
                      }}
                      style={{ backgroundColor: "black"}}
                    >
                      {clicked ? (
                        <StyledDownloadButton
                          href={convertedLink}
                          download={`${outputFileName.replace(
                            ".txt",
                            ""
                          )}_converted.txt`}
                        >
                          Download
                        </StyledDownloadButton>
                      ) : (
                        <StyledButton
                          disabled
                          grid={{
                            column: ["line1", "line1"],
                            row: ["row3", "row4"]
                          }}
                          type="button"
                        >
                          Download
                        </StyledButton>
                      )}
                    </StyledGridChild>
                  </StyledGrid>
                </StyledGridChild>
              </StyledGrid>
            </StyledGradient>
          </StyledNavigation>
          <StyledHalfRight>
            <StyledGradient backGroundColorValue={backGroundColorValue.value}>
              <StyledGrid template={{
                layoutRow: "[row1] 8% [row2] 77% [row3] 15% [row4]",
                layoutCol: "[line1] 100% [line2]"
              }}>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line2"],
                    row: ["row1", "row2"]
                  }}
                >
                  <StyledGradient backGroundColorValue={backGroundColorValue.value}>
                    <StyledRow>
                      {this.renderHeader([
                        { name: "Main" },
                        { name: "Settings" }
                      ])}
                    </StyledRow>
                  </StyledGradient>
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line2"],
                    row: ["row2", "row3"]
                  }}
                >
                  <StyledContent>
                    <Content/>
                  </StyledContent>
                </StyledGridChild>
                <StyledGridChild
                  grid={{
                    column: ["line1", "line2"],
                    row: ["row3", "row4"]
                  }}
                >
                  <StyledButtonArea>
                    <StyledGradient backGroundColorValue={backGroundColorValue.value}>
                      
                    </StyledGradient>
                  </StyledButtonArea>
                </StyledGridChild>
              </StyledGrid>
            </StyledGradient>
          </StyledHalfRight>
        </StyledMainContainer>
      </>
    );
  }
} */}
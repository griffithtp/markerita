import React from "react";
import { AppContext } from "../appContext";

interface Props {
  value: any;
  glContainer: any;
}

class WatchListPanel extends React.Component<Props> {
  state = {
    value: this.props.value || "blaa"
  };

  setValue(e: any) {
    this.setState({ value: e.target.value });
  }

  setContainerTitle() {
    this.props.glContainer.setTitle(this.state.value);
  }

  render() {
    return (
      <div>
        <h2>Watchlist Panel</h2>
        {this.context.selectedStock}
      </div>
    );
  }
}

WatchListPanel.contextType = AppContext;

export { WatchListPanel };

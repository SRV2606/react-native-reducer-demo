import React, {Component} from 'react';
import {CardSection} from './common';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  componentWillUpdate;
  renderDescription() {
    const {library, selectLibraryId} = this.props;
    if (library.id === selectLibraryId) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const {id, title} = this.props.library;
    const {titleStyle} = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStatetoProps = state => {
  return {selectLibraryId: state.selectedLibraryId};
};
export default connect(mapStatetoProps, actions)(ListItem);

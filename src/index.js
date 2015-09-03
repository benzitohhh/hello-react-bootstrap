var React          = require('react'),
    ButtonToolbar  = require('react-bootstrap').ButtonToolbar,
    Button         = require('react-bootstrap').Button,
    ButtonGroup    = require('react-bootstrap').ButtonGroup,
    Modal          = require('react-bootstrap').Modal,
    Popover        = require('react-bootstrap').Popover,
    Tooltip        = require('react-bootstrap').Tooltip,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Input          = require('react-bootstrap').Input,
    ButtonInput    = require('react-bootstrap').ButtonInput
;

var mountNode = document.getElementById('container');

var buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle='primary'>Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle='success'>Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle='info'>Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle='warning'>Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle='danger'>Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle='link'>Link</Button>
  </ButtonToolbar>
);

var sizedButtons = (
  <div>
    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='large'>Large button</Button>
      <Button bsSize='large'>Large button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle='primary'>Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='small'>Small button</Button>
      <Button bsSize='small'>Small button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='xsmall'>Extra small button</Button>
      <Button bsSize='xsmall'>Extra small button</Button>
    </ButtonToolbar>
  </div>
);

var buttonGroupInstance = (
  <ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);

var ExampleModal = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  render() {
    let popover = <Popover title='popover'>very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

const ExampleInput = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },

  render() {
    return (
      <Input
        type='text'
        value={this.state.value}
        placeholder='Enter text'
        label='Working example with validation'
        help='Validation is based on string length.'
        bsStyle={this.validationState()}
        hasFeedback
        ref='input'
        groupClassName='group-class'
        labelClassName='label-class'
        onChange={this.handleChange} />
    );
  }
});

var inputTypeInstance = (
  <form>
    <Input type='text' label='Text' placeholder='Enter text' />
    <Input type='email' label='Email Address' placeholder='Enter email' />
    <Input type='password' label='Password' />
    <Input type='file' label='File' help='[Optional] Block level help text' />
    <Input type='checkbox' label='Checkbox' checked readOnly />
    <Input type='radio' label='Radio' checked readOnly />
    <Input type='select' label='Select' placeholder='select'>
      <option value='select'>select</option>
      <option value='other'>...</option>
    </Input>
    <Input type='select' label='Multiple Select' multiple>
      <option value='select'>select (multiple)</option>
      <option value='other'>...</option>
    </Input>
    <Input type='textarea' label='Text Area' placeholder='textarea' />
    <ButtonInput value='Button Input' />
    <ButtonInput type='reset' value='Reset Button' />
    <ButtonInput type='submit' value='Submit Button' />
  </form>
);

var App = (
  <div>
    {buttonsInstance}
    {sizedButtons}
    {buttonGroupInstance}
    <ExampleModal />
    <ExampleInput />
    {inputTypeInstance}
  </div>
);

React.render(App, mountNode);

//React.render(<Hello />, document.getElementById('container'));

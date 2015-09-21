var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    handleClick: function(){
        console.log("I'm in dropdown yo!");
    },
   render: function() {
       var list = this.props.item.map(function(item){
            return <ListItem item={item} />
       });
       return(
       <div className="dropdown">
           <Button whenClicked={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"/>
           <ul>
               {list}
           </ul>
       </div>
       )
   }
});
const { Schema, model } = require('mongoose');
const moment = require('moment');
const reaction = require('./Reaction');

const thought = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'required',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reaction],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thought.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thought);

module.exports = Thought;
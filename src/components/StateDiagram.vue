<template lang="pug">
  svg.state-diagram
    text.actions-label(
      v-show='Object.keys(stateDiagramActions).length > 0'
      v-bind:x='240' v-bind:y='15'
    )
      | Actions
    state-diagram-group(v-bind:x='240' v-bind:y='40')
      state-diagram-action(
        v-for='(action, _, index) in stateDiagramActions'
        v-bind:action='action'
        v-bind:index='index'
      )
      text(x='50%' y='50%') hello
    text.components-label(
      v-show='Object.keys(stateDiagramComponents).length > 0'
      v-bind:x='70' v-bind:y='15'
    )
      | Components
    state-diagram-group(v-bind:x='70' v-bind:y='275')
      state-diagram-component(
        v-for='(component, _, index) in stateDiagramComponents'
        v-bind:component='component'
        v-bind:index='index'
        v-bind:totalCount='Object.keys(stateDiagramComponents).length'
      )
    text.mutations-label(
      v-show='Object.keys(stateDiagramMutations).length > 0'
      v-bind:x='410' v-bind:y='15'
    )
      | Mutations
    state-diagram-group(v-bind:x='410' v-bind:y='275')
      state-diagram-mutation(
        v-for='(mutation, _, index) in stateDiagramMutations'
        v-bind:mutation='mutation'
        v-bind:index='index'
        v-bind:totalCount='Object.keys(stateDiagramMutations).length'
      )
    text.state-variables-label(
      v-show='Object.keys(stateDiagramStateVariables).length > 0'
      v-bind:x='240' v-bind:y='535'
    )
      | State Variables
    state-diagram-group(v-bind:x='240' v-bind:y='510')
      state-diagram-state-variable(
        v-for='(stateVariable, _, index) in stateDiagramStateVariables'
        v-bind:stateVariable='stateVariable'
        v-bind:index='index'
        v-bind:totalCount='Object.keys(stateDiagramStateVariables).length'
      )
</template>

<script>
import { mapGetters } from 'vuex'
import * as getterNames from '../store/getterNames'
import StateDiagramAction from './StateDiagramAction'
import StateDiagramComponent from './StateDiagramComponent'
import StateDiagramGroup from './StateDiagramGroup'
import StateDiagramMutation from './StateDiagramMutation'
import StateDiagramStateVariable from './StateDiagramStateVariable'

export default {
  name: 'StateDiagram',
  computed: mapGetters([
    getterNames.stateDiagramActions,
    getterNames.stateDiagramComponents,
    getterNames.stateDiagramMutations,
    getterNames.stateDiagramStateVariables
  ]),
  components: {
    StateDiagramAction,
    StateDiagramComponent,
    StateDiagramGroup,
    StateDiagramMutation,
    StateDiagramStateVariable
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramGreenColor: #3ab882
$vuexDiagramOrangeColor: #fcb738
$vuexDiagramPurpleColor: #8e7cb9
$vuexDiagramRedColor: #da5961

.state-diagram
  height: 550px
  width: 480px

.actions-label
  fill: $vuexDiagramOrangeColor
  text-anchor: middle

.components-label
  fill: $vuexDiagramGreenColor
  text-anchor: middle

.mutations-label
  fill: $vuexDiagramRedColor
  text-anchor: middle

.state-variables-label
  fill: $vuexDiagramPurpleColor
  text-anchor: middle
</style>

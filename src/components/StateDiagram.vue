<template lang="pug">
  svg.state-diagram
    template(v-for='(action, _, actionIndex) in stateDiagramActions')
      state-diagram-action-commits-mutation(
        v-for='(mutation, _, mutationIndex) in stateDiagramMutations'
        v-if='doesActionCommitMutation(action, mutation)'
        v-bind:actionIndex='actionIndex'
        v-bind:actionTotalCount='Object.keys(stateDiagramActions).length'
        v-bind:mutationIndex='mutationIndex'
        v-bind:mutationTotalCount='Object.keys(stateDiagramMutations).length'
      )
    template(v-for='(component, _, componentIndex) in stateDiagramComponents')
      state-diagram-component-commits-mutation(
        v-for='(mutation, _, mutationIndex) in stateDiagramMutations'
        v-if='doesComponentCommitMutation(component, mutation)'
        v-bind:componentIndex='componentIndex'
        v-bind:componentTotalCount='Object.keys(stateDiagramComponents).length'
        v-bind:mutationIndex='mutationIndex'
        v-bind:mutationTotalCount='Object.keys(stateDiagramMutations).length'
      )
      state-diagram-component-dispatches-action(
        v-for='(action, _, actionIndex) in stateDiagramActions'
        v-if='doesComponentDispatchAction(component, action)'
        v-bind:componentIndex='componentIndex'
        v-bind:componentTotalCount='Object.keys(stateDiagramComponents).length'
        v-bind:actionIndex='actionIndex'
        v-bind:actionTotalCount='Object.keys(stateDiagramActions).length'
      )
    template(v-for='(mutation, _, mutationIndex) in stateDiagramMutations')
      state-diagram-mutation-mutates-state-variable(
        v-for='(stateVariable, _, stateVariableIndex) in stateDiagramStateVariables'
        v-if='doesMutationMutateStateVariable(mutation, stateVariable)'
        v-bind:mutationIndex='mutationIndex'
        v-bind:mutationTotalCount='Object.keys(stateDiagramMutations).length'
        v-bind:stateVariableIndex='stateVariableIndex'
        v-bind:stateVariableTotalCount='Object.keys(stateDiagramStateVariables).length'
      )
    template(v-for='(stateVariable, _, stateVariableIndex) in stateDiagramStateVariables')
      state-diagram-state-variable-renders-component(
        v-for='(component, _, componentIndex) in stateDiagramComponents'
        v-if='doesStateVariableRenderComponent(stateVariable, component)'
        v-bind:stateVariableIndex='stateVariableIndex'
        v-bind:stateVariableTotalCount='Object.keys(stateDiagramStateVariables).length'
        v-bind:componentIndex='componentIndex'
        v-bind:componentTotalCount='Object.keys(stateDiagramComponents).length'
      )
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
import StateDiagramActionCommitsMutation from './StateDiagramActionCommitsMutation'
import StateDiagramComponentCommitsMutation from './StateDiagramComponentCommitsMutation'
import StateDiagramComponentDispatchesAction from './StateDiagramComponentDispatchesAction'
import StateDiagramGroup from './StateDiagramGroup'
import StateDiagramMutation from './StateDiagramMutation'
import StateDiagramMutationMutatesStateVariable from './StateDiagramMutationMutatesStateVariable'
import StateDiagramStateVariable from './StateDiagramStateVariable'
import StateDiagramStateVariableRendersComponent from './StateDiagramStateVariableRendersComponent'

export default {
  name: 'StateDiagram',
  computed: mapGetters([
    getterNames.stateDiagramActions,
    getterNames.stateDiagramComponents,
    getterNames.stateDiagramMutations,
    getterNames.stateDiagramStateVariables
  ]),
  methods: {
    doesActionCommitMutation (action, mutation) {
      return action.commits.indexOf(mutation.id) !== -1
    },
    doesComponentCommitMutation (component, mutation) {
      return component.commits.indexOf(mutation.id) !== -1
    },
    doesComponentDispatchAction (component, action) {
      return component.dispatches.indexOf(action.id) !== -1
    },
    doesMutationMutateStateVariable (mutation, stateVariable) {
      return mutation.mutates.indexOf(stateVariable.id) !== -1
    },
    doesStateVariableRenderComponent (stateVariable, component) {
      return stateVariable.renders.indexOf(component.id) !== -1
    }
  },
  components: {
    StateDiagramAction,
    StateDiagramComponent,
    StateDiagramActionCommitsMutation,
    StateDiagramComponentCommitsMutation,
    StateDiagramComponentDispatchesAction,
    StateDiagramGroup,
    StateDiagramMutation,
    StateDiagramMutationMutatesStateVariable,
    StateDiagramStateVariable,
    StateDiagramStateVariableRendersComponent
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

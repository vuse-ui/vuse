# Table

Display multiple data with similar format.

## Basic

:::preview Basic Usage || Basic table is just for data display.
demo-preview=./basic.vue
:::

## Border

:::preview Border || Use the bordered attribute to set the table display border.
demo-preview=./border.vue
:::

## Header And Footer

:::preview Customizing the header and footer || Customizing the header and footer of table by setting header and footer property.
demo-preview=./headerAndFooter.vue
:::

## Custom Cells

:::preview Custom Cells || Customize cells through slots.
demo-preview=./customCells.vue
:::

## Fixed Header

:::preview Fixed Header || Display large amounts of data in scrollable view. Specify width of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.
demo-preview=./fixedHeader.vue
:::

## Fixed Columns

:::preview Fixed Columns || To fix some columns and scroll inside other columns,The actual content width can be set through scrollWidth.
demo-preview=./fixedColumns.vue
:::

## Fixed Header And Columns

:::preview Fixed Head And Column || A Solution for displaying large amounts of data with long columns.
demo-preview=./fixedHeaderAndColumns.vue
:::

<style>
.vp-doc tr {
    border-top: none;
}

.vp-doc th { 
     background: inherit;
}

.vp-doc table {
  display: table;
}

.vp-doc th, .vp-doc td {
    border: none;
}

.vp-doc tr:nth-child(2n) {
    background-color: inherit;
}
</style>

# Table

Display multiple data with similar format.

## Basic

:::preview Basic Usage || Basic table is just for data display.
demo-preview=./Basic.vue
:::

## Border

:::preview Border || Use the bordered attribute to set the table display border.
demo-preview=./Border.vue
:::

## Header And Footer

:::preview Customizing the header and footer || Customizing the header and footer of table by setting header and footer property.
demo-preview=./HeaderAndFooter.vue
:::

## Custom Cells

:::preview Custom Cells || Customize cells through slots.
demo-preview=./CustomCells.vue
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

/*
 * @Author       : ganbowen
 * @Date         : 2022-05-13 17:50:20
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-05-13 17:52:19
 * @Descripttion : 
 */
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order'
    ],
    syntax: 'scss',
    fix: true,
    rules: {
        'at-rule-no-unknown': null,
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        indentation: 2,
    }
}
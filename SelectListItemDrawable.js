/**
 * @author yancy
 * copyright 2016 Hightopo All Rights Reserved.
 */

ht.ui.drawable.SelectListItemDrawable = function(borderSize, borderColor, startColor, endColor) {
    ht.ui.drawable.SelectListItemDrawable.superClass.constructor.call(this);
    if (borderSize != null) this.setBorderSize(borderSize);
    if (borderColor != null) this.setBorderColor(borderColor);
    if (startColor != null) this.setStartColor(startColor);
    if (endColor != null) this.setEndColor(endColor);
};
ht.Default.def('ht.ui.drawable.SelectListItemDrawable', ht.ui.drawable.Drawable, {
    ms_ac: ['borderColor', 'borderSize', 'startColor', 'endColor'],
    _borderColor: '#229ed5',
    _borderSize: 2,
    _startColor: 'rgba(204, 236, 248, 1)',
    _endColor: 'rgba(204, 236, 248, 0)',
    draw: function(x, y, width, height, data, view, dom) {
        var self = this,
            g = view.getRootContext(dom),
            borderColor = self.getBorderColor(),
            borderSize = self.getBorderSize(),
            startColor = self.getStartColor(),
            endColor = self.getEndColor();

        g.beginPath();
        // 创建一个表示线性颜色渐变的 CanvasGradient 对象，并设置该对象的作用区域就是线段所在的区域
        var canvasGradient = g.createLinearGradient(x, y, x + width, y);
        canvasGradient.addColorStop(0, startColor);
        canvasGradient.addColorStop(0.4, startColor);
        canvasGradient.addColorStop(1, endColor);
        g.rect(x, y, width, height);
        g.fillStyle = canvasGradient;
        g.fill();

        g.beginPath();
        g.rect(x, y, borderSize, height);
        g.fillStyle = borderColor;
        g.fill();
    },
    getSerializableProperties: function() {
        var parentProperties = ht.ui.drawable.SelectListItemDrawable.superClass.getSerializableProperties.call(this);
        return ht.Default.addMethod(parentProperties, {
            borderColor: 1,
            borderSize: 1,
            startColor: 1,
            endColor: 1
        });
    }
});
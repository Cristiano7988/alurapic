import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding, vnode) {
        let current = 0;

        el.addEventListener('dblclick', function()  {
            const {value} = binding;
            const {animate, reverse} = binding.modifiers;
            const incremento = value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate') {
                current = reverse
                    ? current - incremento 
                    : current + incremento;

                efeito = `rotate(${current}deg)`;
            } else if(binding.arg == 'scale') {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;
            
            if(animate) el.style.transition = `transform 0.5s`;
        })
    }
})
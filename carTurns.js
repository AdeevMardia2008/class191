AFRAME.registerComponent('carturn',{
    schema:{
        carRotation:{
            type:'number',
            default:0
        },
        carPosition:{
            type:'number',
            default:0
        },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            this.data.carRotation=this.el.getAttribute('rotation')
            this.data.carPosition=this.el.getAttribute('position')
            var rot=this.data.carRotation
            var pos=this.data.carPosition

            if (e.key==='ArrowRight'){
                rot.x+=10
                this.el.setAttribute('rotation',rot)
                console.log('hello world')
            }
            if (e.key==='ArrowLeft'){
                rot.x-=0.5
                this.el.setAttribute('rotation',rot)
            }
            if (e.key==='ArrowUp'){
                pos.x+=10
                this.el.setAttribute('position',pos)
            }
            if (e.key==='ArrowDown'){
                pos.x-=0.5
                this.el.setAttribute('position',pos)
            }
        })
    }
    }
})
AFRAME.registerComponent('backgroundrotation',{
    schema:{
        bgRotation:{
            type:'number',
            default:0
        }
    },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            
            var bgrotate=this.data.bgRotation
            if (e.key=='ArrowRight'){
                if (bgrotate<0.1){
                    bgrotate+=0.01
                }
            }
            if (e.key=='ArrowLeft'){
                if (bgrotate>-0.1){
                    bgrotate-=0.01
                }
            }
        })
        
    },
    tick:function(){
        var backgroundRotate=this.el.getAttribute('rotation')
        var bgrotate=this.data.bgRotation
        backgroundRotate.y+=bgrotate
        this.el.setAttribute('rotation',{
            x:backgroundRotate.x,
            y:backgroundRotate.y,
            z:backgroundRotate.z,
        })
        
    }
    
})
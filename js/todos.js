$(function(){
	var Todo = Backbone.Model.extend({
		defaults : {
			title : 'something to do...',
			done : false,
			order : Todos.nextOrder()
		},

		toggleDone : function{
			this.save({done: !this.get('done')})
		}
	});


	var Todos = Backbone.Collection.extend({
		model : Todo,
		done : function(){
			return this.where({done:true})
		},
		remaining : function(){
			return this.where({done:false})
		},
		nextOrder : function(){
			if(!this.length){
				return 1
			}else{
				return this.last().get('order') + 1
			}
		}
	});

	var todoList = new Todos();

	var modelView = Backbone.View.extend({
		tagName: 'li',
		template : _.template($('#list_template').html());
		events: {
			'click .toggle' : 'toggleDone',
			'dblclick .view' : 'edit',
			'click a.destroy' : 'clear',
			'keypress .edit' : 'updateOK',
			'blur .edit' : 'close'
		},
		initialize : function(){
			this.listenTo('change',this.render);
			this.listenTo('destroy',this.remove);
		},

		render : function(){
			this.$el.html( this.template(this.model.toJSON()) );
			//  ....
			this.$el.toggleClass('done',this.model.get('done'));
			// ???
			this.input = $('.edit');
		},

		toggleDone : function(){

		},

		edit : function(){

		},

		clear : function(){

		},

		updateOK : function(){

		},

		close : function(){
			
		}
		
	})

})

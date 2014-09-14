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

		},
		initialize : function(){
			this.listenTo('change',this.render);
			this.listenTo('destroy',this.remove);
		},
		
	})

})
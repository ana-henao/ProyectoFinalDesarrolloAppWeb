curl -X GET localhost:8080/menuItems -i

curl -X GET localhost:8080/menuItems?type=1 -i
curl -X GET localhost:8080/menuItems?type=2 -i
curl -X GET localhost:8080/menuItems?type=3 -i

curl -X GET localhost:8080/menuItems/2 -i

curl -X POST -H "content-type: application/json" -H "accept-content: application/json" localhost:8080/menuItems -d '{"nombre": "Changua", "description": "Changua al estilo Rolo", "precio":"18000", "tipo":"1"}' -i

curl -X PUT -H "content-type: application/json" -H "accept-content: application/json" localhost:8080/menuItems/2 -d '{"nombre": "Caldo de Costilla", "description": "Caldo al estilo Rolo", "precio":"20000", "tipo":"1"}' -i

curl -X DELETE localhost:8080/menuItems/2 -i


#MESERO
curl -X GET localhost:8080/meseros/1 -i

curl -X POST -H "content-type: application/json" -H "accept: application/json" localhost:8080/meseros -d '{"nombre": "Juan Pérez", "identificacion": "0055996688"}' -i

curl -X PUT -H "content-type: application/json" -H "accept: application/json" localhost:8080/meseros/1 -d '{"nombre": "Carlos Gómez"}' -i

curl -X DELETE localhost:8080/meseros/1 -i

# CLIENTE
curl -X POST -H "content-type: application/json" -H "accept: application/json" localhost:8080/clientes -d '{"nombre": "Juan Pérez", "identificacion": "888888"}' -i


#MESAS

curl -X GET localhost:8080/mesas/1 -i

curl -X PUT -H "content-type: application/json" -H "accept: application/json" localhost:8080/mesas/1 -d '{"mesero_id": 2, "cliente_id": 3}' -i

#PEdido
curl -X GET localhost:8080/pedidos -i

curl -X POST -H "content-type: application/json" -H "accept: application/json" localhost:8080/pedidos -d '{"fecha": "2023-04-15", "total": 150.00, "cliente_id": 1, "mesa_id": 1}' -i

curl -X PUT -H "content-type: application/json" -H "accept: application/json" localhost:8080/pedidos/1 -d '{"total": 200.00}' -i

curl -X GET localhost:8080/pedidos/mesa/1 -i

#Items Pedido

curl -X POST -H "content-type: application/json" -H "accept: application/json" localhost:8080/pedidos-menuitems -d '{"pedido_id": 1, "menu_item_id": 2}' -i

curl -X GET localhost:8080/pedidos-menuitems/1 -i

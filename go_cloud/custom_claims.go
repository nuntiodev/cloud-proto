package go_cloud

import (
	"github.com/golang-jwt/jwt"
)

type CustomClaims struct {
	ProjectId string  `json:"project_id"`
	PartnerId string  `json:"partner_id"`
	ApiUrl    string  `json:"api_url"`
	Type      KeyType `json:"key_type"`
	jwt.StandardClaims
}

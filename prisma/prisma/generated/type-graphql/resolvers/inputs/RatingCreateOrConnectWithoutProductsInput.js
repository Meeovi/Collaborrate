"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateWithoutProductsInput_1 = require("../inputs/RatingCreateWithoutProductsInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingCreateOrConnectWithoutProductsInput = class RatingCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput)
], RatingCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
RatingCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], RatingCreateOrConnectWithoutProductsInput);
exports.RatingCreateOrConnectWithoutProductsInput = RatingCreateOrConnectWithoutProductsInput;

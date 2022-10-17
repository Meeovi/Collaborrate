"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Gift_certificatesWhereUniqueInput = class Gift_certificatesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Gift_certificatesWhereUniqueInput.prototype, "id", void 0);
Gift_certificatesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Gift_certificatesWhereUniqueInput", {
        isAbstract: true
    })
], Gift_certificatesWhereUniqueInput);
exports.Gift_certificatesWhereUniqueInput = Gift_certificatesWhereUniqueInput;

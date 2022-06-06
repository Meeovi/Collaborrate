"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StocksWhereUniqueInput = class StocksWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StocksWhereUniqueInput.prototype, "id", void 0);
StocksWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksWhereUniqueInput", {
        isAbstract: true
    })
], StocksWhereUniqueInput);
exports.StocksWhereUniqueInput = StocksWhereUniqueInput;

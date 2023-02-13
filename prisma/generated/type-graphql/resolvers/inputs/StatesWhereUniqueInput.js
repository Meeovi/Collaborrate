"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatesWhereUniqueInput = class StatesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatesWhereUniqueInput.prototype, "id", void 0);
StatesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesWhereUniqueInput", {
        isAbstract: true
    })
], StatesWhereUniqueInput);
exports.StatesWhereUniqueInput = StatesWhereUniqueInput;

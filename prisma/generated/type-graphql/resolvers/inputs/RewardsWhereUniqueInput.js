"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RewardsWhereUniqueInput = class RewardsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RewardsWhereUniqueInput.prototype, "id", void 0);
RewardsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RewardsWhereUniqueInput", {
        isAbstract: true
    })
], RewardsWhereUniqueInput);
exports.RewardsWhereUniqueInput = RewardsWhereUniqueInput;

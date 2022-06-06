"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Reward_pointsWhereUniqueInput = class Reward_pointsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Reward_pointsWhereUniqueInput.prototype, "id", void 0);
Reward_pointsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Reward_pointsWhereUniqueInput", {
        isAbstract: true
    })
], Reward_pointsWhereUniqueInput);
exports.Reward_pointsWhereUniqueInput = Reward_pointsWhereUniqueInput;

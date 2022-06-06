"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Reward_pointsAvgAggregate = class Reward_pointsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Reward_pointsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Reward_pointsAvgAggregate.prototype, "discount", void 0);
Reward_pointsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Reward_pointsAvgAggregate", {
        isAbstract: true
    })
], Reward_pointsAvgAggregate);
exports.Reward_pointsAvgAggregate = Reward_pointsAvgAggregate;

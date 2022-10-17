"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InvitationsAvgAggregate = class InvitationsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InvitationsAvgAggregate.prototype, "id", void 0);
InvitationsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InvitationsAvgAggregate", {
        isAbstract: true
    })
], InvitationsAvgAggregate);
exports.InvitationsAvgAggregate = InvitationsAvgAggregate;

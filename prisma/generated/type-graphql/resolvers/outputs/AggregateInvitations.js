"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInvitations = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsAvgAggregate_1 = require("../outputs/InvitationsAvgAggregate");
const InvitationsCountAggregate_1 = require("../outputs/InvitationsCountAggregate");
const InvitationsMaxAggregate_1 = require("../outputs/InvitationsMaxAggregate");
const InvitationsMinAggregate_1 = require("../outputs/InvitationsMinAggregate");
const InvitationsSumAggregate_1 = require("../outputs/InvitationsSumAggregate");
let AggregateInvitations = class AggregateInvitations {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsCountAggregate_1.InvitationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsCountAggregate_1.InvitationsCountAggregate)
], AggregateInvitations.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsAvgAggregate_1.InvitationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsAvgAggregate_1.InvitationsAvgAggregate)
], AggregateInvitations.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsSumAggregate_1.InvitationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsSumAggregate_1.InvitationsSumAggregate)
], AggregateInvitations.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMinAggregate_1.InvitationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMinAggregate_1.InvitationsMinAggregate)
], AggregateInvitations.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMaxAggregate_1.InvitationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMaxAggregate_1.InvitationsMaxAggregate)
], AggregateInvitations.prototype, "_max", void 0);
AggregateInvitations = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInvitations", {
        isAbstract: true
    })
], AggregateInvitations);
exports.AggregateInvitations = AggregateInvitations;

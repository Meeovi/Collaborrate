"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
let AggregateTicketingArgs = class AggregateTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], AggregateTicketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByWithRelationAndSearchRelevanceInput_1.TicketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTicketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], AggregateTicketingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTicketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTicketingArgs.prototype, "skip", void 0);
AggregateTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTicketingArgs);
exports.AggregateTicketingArgs = AggregateTicketingArgs;

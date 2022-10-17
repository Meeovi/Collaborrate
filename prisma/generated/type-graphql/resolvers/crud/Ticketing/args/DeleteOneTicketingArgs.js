"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
let DeleteOneTicketingArgs = class DeleteOneTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], DeleteOneTicketingArgs.prototype, "where", void 0);
DeleteOneTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTicketingArgs);
exports.DeleteOneTicketingArgs = DeleteOneTicketingArgs;

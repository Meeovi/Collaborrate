"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
let DeleteManyTicketingArgs = class DeleteManyTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], DeleteManyTicketingArgs.prototype, "where", void 0);
DeleteManyTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTicketingArgs);
exports.DeleteManyTicketingArgs = DeleteManyTicketingArgs;

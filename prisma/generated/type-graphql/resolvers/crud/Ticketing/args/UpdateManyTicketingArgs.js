"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingUpdateManyMutationInput_1 = require("../../../inputs/TicketingUpdateManyMutationInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
let UpdateManyTicketingArgs = class UpdateManyTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingUpdateManyMutationInput_1.TicketingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingUpdateManyMutationInput_1.TicketingUpdateManyMutationInput)
], UpdateManyTicketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], UpdateManyTicketingArgs.prototype, "where", void 0);
UpdateManyTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTicketingArgs);
exports.UpdateManyTicketingArgs = UpdateManyTicketingArgs;

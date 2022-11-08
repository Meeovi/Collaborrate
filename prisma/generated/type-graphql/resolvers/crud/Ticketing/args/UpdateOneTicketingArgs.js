"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingUpdateInput_1 = require("../../../inputs/TicketingUpdateInput");
const TicketingWhereUniqueInput_1 = require("../../../inputs/TicketingWhereUniqueInput");
let UpdateOneTicketingArgs = class UpdateOneTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingUpdateInput_1.TicketingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingUpdateInput_1.TicketingUpdateInput)
], UpdateOneTicketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereUniqueInput_1.TicketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingWhereUniqueInput_1.TicketingWhereUniqueInput)
], UpdateOneTicketingArgs.prototype, "where", void 0);
UpdateOneTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTicketingArgs);
exports.UpdateOneTicketingArgs = UpdateOneTicketingArgs;

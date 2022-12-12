"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingCreateInput_1 = require("../../../inputs/TicketingCreateInput");
let CreateOneTicketingArgs = class CreateOneTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingCreateInput_1.TicketingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TicketingCreateInput_1.TicketingCreateInput)
], CreateOneTicketingArgs.prototype, "data", void 0);
CreateOneTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTicketingArgs);
exports.CreateOneTicketingArgs = CreateOneTicketingArgs;

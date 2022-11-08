"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingCreateManyInput_1 = require("../../../inputs/TicketingCreateManyInput");
let CreateManyTicketingArgs = class CreateManyTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingCreateManyInput_1.TicketingCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTicketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTicketingArgs.prototype, "skipDuplicates", void 0);
CreateManyTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTicketingArgs);
exports.CreateManyTicketingArgs = CreateManyTicketingArgs;

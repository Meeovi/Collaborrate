"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerCreateInput_1 = require("../../../inputs/SchedulerCreateInput");
let CreateOneSchedulerArgs = class CreateOneSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerCreateInput_1.SchedulerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerCreateInput_1.SchedulerCreateInput)
], CreateOneSchedulerArgs.prototype, "data", void 0);
CreateOneSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSchedulerArgs);
exports.CreateOneSchedulerArgs = CreateOneSchedulerArgs;

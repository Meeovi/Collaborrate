"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerCreateManyInput_1 = require("../../../inputs/SchedulerCreateManyInput");
let CreateManySchedulerArgs = class CreateManySchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerCreateManyInput_1.SchedulerCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySchedulerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySchedulerArgs.prototype, "skipDuplicates", void 0);
CreateManySchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySchedulerArgs);
exports.CreateManySchedulerArgs = CreateManySchedulerArgs;

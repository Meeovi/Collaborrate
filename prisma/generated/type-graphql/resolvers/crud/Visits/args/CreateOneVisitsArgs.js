"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsCreateInput_1 = require("../../../inputs/VisitsCreateInput");
let CreateOneVisitsArgs = class CreateOneVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsCreateInput_1.VisitsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsCreateInput_1.VisitsCreateInput)
], CreateOneVisitsArgs.prototype, "data", void 0);
CreateOneVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneVisitsArgs);
exports.CreateOneVisitsArgs = CreateOneVisitsArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoCreateInput_1 = require("../../../inputs/OotoCreateInput");
let CreateOotoArgs = class CreateOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCreateInput_1.OotoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoCreateInput_1.OotoCreateInput)
], CreateOotoArgs.prototype, "data", void 0);
CreateOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOotoArgs);
exports.CreateOotoArgs = CreateOotoArgs;

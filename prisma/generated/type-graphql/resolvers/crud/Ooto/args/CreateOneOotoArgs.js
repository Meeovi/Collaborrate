"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoCreateInput_1 = require("../../../inputs/OotoCreateInput");
let CreateOneOotoArgs = class CreateOneOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCreateInput_1.OotoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoCreateInput_1.OotoCreateInput)
], CreateOneOotoArgs.prototype, "data", void 0);
CreateOneOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneOotoArgs);
exports.CreateOneOotoArgs = CreateOneOotoArgs;

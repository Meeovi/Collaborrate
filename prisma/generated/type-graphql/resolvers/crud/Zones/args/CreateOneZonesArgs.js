"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesCreateInput_1 = require("../../../inputs/ZonesCreateInput");
let CreateOneZonesArgs = class CreateOneZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesCreateInput_1.ZonesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesCreateInput_1.ZonesCreateInput)
], CreateOneZonesArgs.prototype, "data", void 0);
CreateOneZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneZonesArgs);
exports.CreateOneZonesArgs = CreateOneZonesArgs;

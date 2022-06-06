"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsCreateInput_1 = require("../../../inputs/LeadsCreateInput");
let CreateLeadsArgs = class CreateLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsCreateInput_1.LeadsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsCreateInput_1.LeadsCreateInput)
], CreateLeadsArgs.prototype, "data", void 0);
CreateLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateLeadsArgs);
exports.CreateLeadsArgs = CreateLeadsArgs;

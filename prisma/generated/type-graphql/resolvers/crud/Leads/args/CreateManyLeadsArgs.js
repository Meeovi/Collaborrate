"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsCreateManyInput_1 = require("../../../inputs/LeadsCreateManyInput");
let CreateManyLeadsArgs = class CreateManyLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsCreateManyInput_1.LeadsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLeadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLeadsArgs.prototype, "skipDuplicates", void 0);
CreateManyLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLeadsArgs);
exports.CreateManyLeadsArgs = CreateManyLeadsArgs;

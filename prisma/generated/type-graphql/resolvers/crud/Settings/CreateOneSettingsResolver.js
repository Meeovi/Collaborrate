"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSettingsArgs_1 = require("./args/CreateOneSettingsArgs");
const Settings_1 = require("../../../models/Settings");
const helpers_1 = require("../../../helpers");
let CreateOneSettingsResolver = class CreateOneSettingsResolver {
    async createOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingsArgs_1.CreateOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSettingsResolver.prototype, "createOneSettings", null);
CreateOneSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], CreateOneSettingsResolver);
exports.CreateOneSettingsResolver = CreateOneSettingsResolver;
